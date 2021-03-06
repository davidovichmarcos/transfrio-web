const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../main');
chai.use(chaiHttp);
chai.should();

describe("Trucks: ", () => {
    describe("GET /", () => {
        it("should get all the trucks", (done) => {
            chai.request(app)
                .get('/getTrucks')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.match(/([{\w":.,@}])+/g)
                    done();
                });
        });
        
        it("should get a truck", (done) => {
            chai.request(app)
                .get('/getTruckById/-M-j7nR2vW4H8dWVuoPq')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.includes("brand")
                    res.text.should.includes("licensePlate")
                    res.text.should.includes("model")                    
                    res.text.should.includes("year")                    
                    res.text.should.includes("driverDocument")                    
                    done();
                });
        });

    });
    describe("POST /", () => {
        it("should create a truck", (done) => {
            const truck = { driverDocument: "123", brand: "Suzuki", licensePlate: "ABC123", model:"Grand Vitara", year:"1999" }
            chai.request(app)
                .post('/createTruck')
                .send(truck)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        })
    })
});