import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let inMemoryCarsRepository: InMemoryCarsRepository;

describe("List Cars", () => {

	beforeEach(() => {
		inMemoryCarsRepository = new InMemoryCarsRepository();
		listCarsUseCase = new ListAvailableCarsUseCase(inMemoryCarsRepository);
	});

	it("should be able to list all available cars", async () => {
      
		const car = await inMemoryCarsRepository.create({
			name: "Carro 1",
			description: "Carro de teste",
			daily_rate: 140.00,
			license_plate: "test-0101",
			fine_amount: 80.00,
			brand: "marcateste",
			category_id: "category_id"
		});

		const cars = await listCarsUseCase.execute({});
		
		expect(cars).toEqual([car]);
	});
   
	it("should be able to list available cars by brand", async () => {
		const car = await inMemoryCarsRepository.create({
			name: "Carro 2",
			description: "Carro de teste",
			daily_rate: 140.00,
			license_plate: "test-0101",
			fine_amount: 80.00,
			brand: "brand_test",
			category_id: "category_id"
		});

		const cars = await listCarsUseCase.execute({
			brand: "brand_test",
		});

		expect(cars).toEqual([car]);
	});

	it("should be able to list available cars by category", async () => {
		const car = await inMemoryCarsRepository.create({
			name: "Carro 2",
			description: "Carro de teste",
			daily_rate: 140.00,
			license_plate: "test-0101",
			fine_amount: 80.00,
			brand: "marca_teste",
			category_id: "category_id_test"
		});

		const cars = await listCarsUseCase.execute({
			category_id: "category_id_test",
		});
		
		expect(cars).toEqual([car]);
	});

	it("should be able to list available cars by name", async () => {
		const car = await inMemoryCarsRepository.create({
			name: "Carro 2 test",
			description: "Carro de teste",
			daily_rate: 140.00,
			license_plate: "test-0101",
			fine_amount: 80.00,
			brand: "marca_teste",
			category_id: "category_id"
		});

		const cars = await listCarsUseCase.execute({
			name: "Carro 2 test"
		});
      
		expect(cars).toEqual([car]);
	});
}
);