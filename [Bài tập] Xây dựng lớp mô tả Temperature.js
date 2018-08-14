var Temperature = function (poison, degreesF) {
    this.poison = function () {
        return ( C * 1.8 ) +  32
    };
    this.degreesKenvin = function () {
        return ( C  + 273.15 )
    };
    this.display = function () {
        console.log(this.poison());
        console.log(this.degreesKenvin());
    }
};

function main() {
    var rec1 = new Rectangle(25);
    rec1.display();
}
