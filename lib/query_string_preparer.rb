class QueryStringPreparer
	def initialize(query_params)
		@query_params = query_params

		@asc_order_params = @query_params[:asc].to_a.reject {|field|
			!User::QUERIYABLE_FIELDS.include?(field.to_sym)
		}

		@desc_order_params = @query_params[:desc].to_a.reject {|field|
			!User::QUERIYABLE_FIELDS.include?(field.to_sym)
		}

		@filter_params = (@query_params[:filters] || {}).reject {|field, value|
			!User::QUERIYABLE_FIELDS.include?(field.to_sym)
		}
		
		@page = @query_params[:page] || 1
	end

	def order_string
		[
			@query_params[:asc].to_a.map { |field|
				field + " asc"
			}.join(", "),
			@query_params[:desc].to_a.map { |field|
				field + " desc"
			}.join(", ")
		].reject(&:blank?).join(", ")
	end

	def conditions_string
		@filter_params.map {|field, value| 
			"#{field} like '%#{value}%'"
		}.join(" AND ")
	end

	def offset_string
		@page - 1
	end
end