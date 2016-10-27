class User < ActiveRecord::Base
  QUERIYABLE_FIELDS = [:name, :role, :gender]
  attr_accessible *QUERIYABLE_FIELDS
  PAGE_LIMIT = 5
end
