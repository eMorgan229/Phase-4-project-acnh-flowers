class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :flower_id
      t.string :review_content

      t.timestamps
    end
  end
end
