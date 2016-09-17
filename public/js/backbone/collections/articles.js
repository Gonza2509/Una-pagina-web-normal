MenosNormal.Collections.Articles = Backbone.Collection.extend({
	model : MenosNormal.Models.Article,
	url: '/articles/',
	name: 'articles'
});