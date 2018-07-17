// JavaScript source code


function ElectronicLife(map, legend) {
    function getModule(modConstructor) {
        var module = {};
        modConstructor(module);
        return module;
    }

    function constructWorld(exports) {
        exports.Grid = function (width, height) {
            this.space = new Array(width * height);
            this.width = width;
            this.height = height;
        };

        exports.Grid.prototype.isInside = function (vector) {
            return vector.x >= 0 && vector.x < this.width &&
            vector.y >= 0 && vector.y < this.height;
        };

        exports.Grid.prototype.get = function (vector) {
            return this.space[vector.x + this.width * vector.y];
        };

        exports.Grid.prototype.set = function (vector, value) {
            this.space[vector.x + this.width * vector.y] = value;
        };

        exports.Vector = function Vector(x, y) {
            this.x = x;
            this.y = y;
        }

        exports.Vector.prototype.plus = function (other) {
            return new Vector(this.x + other.x, this.y + other.y);
        }

        exports.directions = {
            "n": new Vector(0, -1),
            "ne": new Vector(1, -1),
            "e": new Vector(1, 0),
            "se": new Vector(1, 1),
            "s": new Vector(0, 1),
            "sw": new Vector(-1, 1),
            "w": new Vector(-1, 0),
            "nw": new Vector(-1, -1)
        };

        exports.World = function(map, legend) {
            var grid = new Grid(map[0].length, map.length);
            this.grid = grid;
            this.legend = legend;

            map.forEach(function(x, y) {
                for (var x = 0; x < line.length; x++) {
                    grid.set(new Vector(x, y),
                        elementFromChar(legend, line[x]));
                }
            });
        }


    }

    var world = getModule(constructWorld(module));

    function addElements(world) {
        world.directionNames = "ne e se s sw w nw".split(" ");
        world.BouncingCritter = function() {
            this.direction = randomElement(directionNames);
        };

        world.BouncingCritter.prototype.act = function(view) {
            if (view.look(this.direction) != " ")
                this.direction = view.find(" ") || "s";
            return {type: "move", direction: this.direction};
        };

        world.randomElement = function(array) {
            return array[Math.floor(Math.random() * array.length)];
        };

        world.elementFromChar = function (legend, ch) {
            if (ch == " ") {
                return null;
            }
            element = new legend[ch]();
            element.originChar = ch;
            return element;
        }
        


    }
    
}