export interface Recipe {
  id: number,     
  name: string,
  description:  string, 
  url         :   string,
  user_parent_id: number,
  user_email     :string, 
  imageUrl       :string
}

export interface RecipeDto {
    id: number,     
    name: string,
    description:  string, 
    url:   string,
    imageUrl:string
  }