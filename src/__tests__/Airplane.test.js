import Airplane from '../Airplane.js'
let newAirplane;

describe("Airplane Class", () => {

    beforeEach(() => {
        newAirplane = new Airplane("Cesna", 10, 150)
    })

    test('created an instance of the Airplane Class', () => {
        expect(newAirplane).toBeInstanceOf(Airplane);
    })

    test('has an instance variable of type', () => {
        expect(newAirplane.type).toBe("Cesna");
    })
    test("has an instance variable of wing loading", () => {
        expect(newAirplane.wingLoading).toBe(10);
    })

    test("has an instance variable of horse powers", () => {
        expect(newAirplane.horsePower).toBe(150);

    })

    test("has an instance variable of on", () => {
        expect(newAirplane.on).toBe(false);

    })

    describe("#start", () => {
        test('should turn on the plane', () => {
            newAirplane.start();
            expect(newAirplane.on).toEqual(true);

        })

        test('returns a success message', () => {
            expect(newAirplane.start()).toEqual("airplane started");

        })

        test('returns an error message when the plane is already on', () => {
            newAirplane.start();
            expect(newAirplane.start()).toEqual("airplane already started");

        })

    })

    describe("#takeoff", () => {
        test('launches the plane', () => {
            newAirplane.start()
            newAirplane.takeoff();
            expect(newAirplane.flying).toEqual(true);

        })

        test('returns a success message', () => {
            newAirplane.start();
            expect(newAirplane.takeoff()).toEqual("airplane launched");

        })

        test('returns an error message if the engine is off', () => {
            expect(newAirplane.takeoff()).toEqual("airplane not started, please start");

        })

    })

    describe("#land", () => {
        test('lands the plane', () => {
            newAirplane.start()
            newAirplane.takeoff();
            newAirplane.land()
            expect(newAirplane.flying).toEqual(false);

        })

        test('returns a success message', () => {
            newAirplane.start()
            newAirplane.takeoff();
            expect(newAirplane.land()).toEqual("airplane landed");

        })

        test('returns an error message if the engine is off', () => {
            expect(newAirplane.land()).toEqual("airplane not started, please start");

        })

        test('returns an error message if the engine is one but not flying', () => {
            newAirplane.start();
            //console.log(newAirplane.flying)
            expect(newAirplane.land()).toEqual("airplane already on the ground");

        })
    })
})