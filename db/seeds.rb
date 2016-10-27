# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
	{name: 'kishore', role: 'Junior Scientist', gender: 'male'},
	{name: 'krishna', role: 'Junior Scientist', gender: 'male'},
	{name: 'mahesh', role: 'Senior Scientist', gender: 'male'},
	{name: 'hanuman', role: 'Senior Scientist', gender: 'male'},
	{name: 'ram', role: 'Junior Scientist', gender: 'male'},
	{name: 'praveen', role: 'Senior Scientist', gender: 'male'},
	{name: 'maheshwari', role: 'Junior Scientist', gender: 'female'},
	{name: 'radha', role: 'Pro Scientist', gender: 'female'},
	{name: 'janaki', role: 'Pro Scientist', gender: 'female'},
	{name: 'ramba', role: 'Senior Scientist', gender: 'female'}
])