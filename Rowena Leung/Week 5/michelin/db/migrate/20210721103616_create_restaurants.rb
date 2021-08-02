class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.text :name
      t.integer :year
      t.text :location
      t.integer :stars
      t.integer :chef_id
      t.text :image
      t.timestamps
    end
  end
end
