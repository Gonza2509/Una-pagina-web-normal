$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app = new MenosNormal.Views.App( $('body') );
	window.routers.base = new MenosNormal.Routers.Base();

	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind('connect', function(){
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	window.views.app =new MenosNormal.Views.App( $('body') );
	
	// c = new Puls3.Collections.Articles()
	window.collections.articles = new MenosNormal.Collections.Articles();

	window.collections.articles.on('add', function (model) {
		// Agregar nuevas vistas de articulos aqui
		var view = new MenosNormal.Views.Article({model:model});

		view.render();

		view.$el.prependTo('.posts');
	});

	var xhr = window.collections.articles.fetch();

	xhr.done(function () {
		console.log('Start app');

		Backbone.history.start({
			root : '/',
			pushState: true,
			silent : false
		});
	});
});