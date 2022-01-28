import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepositories {
	private categories: Category[];

	constructor() {
		this.categories = [];
	}

	create({ name, description }: ICreateCategoryDTO): void {
		const newCategory = new Category();

		Object.assign(newCategory, {
			name,
			description,
			created_at: new Date()
		});

		this.categories.push(newCategory);
	}

	list(): Category[] {
		return this.categories;
	}

}