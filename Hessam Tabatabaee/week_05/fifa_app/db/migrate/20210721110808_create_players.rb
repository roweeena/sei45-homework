class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :family
      t.integer :national_goals
      t.text :image
      t.timestamps
    end
  end
end
