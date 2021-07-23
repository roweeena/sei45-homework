class Restaurant < ActiveRecord::Base
  belongs_to :chef, :optional => true
end
