class Spacecraft {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.direction = "N";
    }

    moveForward() {
        if (this.direction === "N") {
            this.y++;
        } else if (this.direction === "S") {
            this.y--;
        } else if (this.direction === "E") {
            this.x++;
        } else if (this.direction === "W") {
            this.x--;
        } else if (this.direction === "U") {
            this.z++;
        } else if (this.direction === "D") {
            this.z--;
        }
    }

    moveBackward() {
        if (this.direction === "N") {
            this.y--;
        } else if (this.direction === "S") {
            this.y++;
        } else if (this.direction === "E") {
            this.x--;
        } else if (this.direction === "W") {
            this.x++;
        } else if (this.direction === "U") {
            this.z--;
        } else if (this.direction === "D") {
            this.z++;
        }
    }

    turnLeft() {
        if (this.direction === "N") {
            this.direction = "W";
        } else if (this.direction === "S") {
            this.direction = "E";
        } else if (this.direction === "E") {
            this.direction = "N";
        } else if (this.direction === "W") {
            this.direction = "S";
        } else if (this.direction === "U") {
            this.direction = "N";
        } else if (this.direction === "D") {
            this.direction = "S";
        }
    }

    turnRight() {
        if (this.direction === "N") {
            this.direction = "E";
        } else if (this.direction === "S") {
            this.direction = "W";
        } else if (this.direction === "E") {
            this.direction = "S";
        } else if (this.direction === "W") {
            this.direction = "N";
        } else if (this.direction === "U") {
            this.direction = "N";
        } else if (this.direction === "D") {
            this.direction = "S";
        }
    }

    turnUp() {
        if (this.direction === "N") {
            this.direction = "U";
        } else if (this.direction === "S") {
            this.direction = "D";
        } else if (this.direction === "E") {
            this.direction = "U";
        } else if (this.direction === "W") {
            this.direction = "D";
        }
    }

    turnDown() {
        if (this.direction === "N") {
            this.direction = "D";
        } else if (this.direction === "S") {
            this.direction = "U";
        } else if (this.direction === "E") {
            this.direction = "D";
        } else if (this.direction === "W") {
            this.direction = "U";
        }
    }

    processCommands(commands) {
        for (let command of commands) {
            switch (command) {
                case "f":
                    this.moveForward();
                    break;
                case "b":
                    this.moveBackward();
                    break;
                case "l":
                    this.turnLeft();
                    break;
                case "r":
                    this.turnRight();
                    break;
                case "u":
                    this.turnUp();
                    break;
                case "d":
                    this.turnDown();
                    break;
                default:
                    break;
            }
        }
    }

    getPosition() {
        return [this.x, this.y, this.z];
    }

    getDirection() {
        return this.direction;
    }
}

// Example usage:
const spacecraft = new Spacecraft();
const commands = ["f", "r", "u", "b", "l"];
spacecraft.processCommands(commands);
const finalPosition = spacecraft.getPosition();
const finalDirection = spacecraft.getDirection();
console.log("Final Position: (" + finalPosition[0] + ", " + finalPosition[1] + ", " + finalPosition[2] + ")");
console.log("Final Direction: " + finalDirection);
