import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cars_image")
class CarImage {

   @Column()
   	car_id: string;

   @PrimaryColumn()
   	id: string;

   @Column()
   	image_name: string;

   @CreateDateColumn()
   	created_at: Date;

   constructor() {
   	if (!this.id) {
   		this.id = uuidV4();
   	}
   }
}

export { CarImage };