class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.integer :worldcup_appearance
      t.text :worldcup_champions
      t.text :flag
      t.timestamps
    end
  end
end
