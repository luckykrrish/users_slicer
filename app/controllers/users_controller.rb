require File.join(Rails.root, 'lib', 'query_string_preparer')

class UsersController < ApplicationController

  # implement sort, pagination, show roles
  def index
  	if request.xhr?
  		query_strings = QueryStringPreparer.new(params)

  		users = User.limit(User::PAGE_LIMIT)
			  		.order(query_strings.order_string)
			  		.where(query_strings.conditions_string)
			  		.offset(query_strings.offset_string)

  		render json: users.to_json
  	end
  end

end
