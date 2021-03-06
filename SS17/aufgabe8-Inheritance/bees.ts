namespace Aufgabe8_Inheritance {
        export class Bees extends SuperBees {

        x: number; 
        y: number;
        size: number; 
        color: string;
            
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            
        }
                
        
        drawBee(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        //Optik der Bienen wird bei Gelegenheit noch überarbeitet..
        }
        
        move(): void {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
        
    }
}