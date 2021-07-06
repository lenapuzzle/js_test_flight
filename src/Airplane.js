class Airplane {
    constructor(type, wingLoading, horsePower) {
        this.type = type;
        this.wingLoading = wingLoading;
        this.horsePower = horsePower;
        this.on = false;
        this.flying = false;
    }

    start() {
        if (this.on) {
            return "airplane already started"
        } else {
            this.on = true;
            return "airplane started";
        }
    }

    takeoff() {
        if (this.on) {
            this.flying = true;
            return "airplane launched";
        } else {
            return "airplane not started, please start";
        }
    }

    land() {
        if (this.flying) {
            this.flying = false;
            return "airplane landed"
        } else if (!this.flying && this.on) {
            return "airplane already on the ground"
        } else if (!this.on) {
            return "airplane not started, please start";
        }
    }
}
export default Airplane