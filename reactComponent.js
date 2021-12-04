const dish = React.createElement("h1", { id: "heading-01" }, "Salomon dish");
const dessert = React.createElement("h1", { id: "heading-02" }, "Ice cream");

let items = [
	"2 lb salmon",
	"5 sprigs fresh rosemary",
	"2 tablespoons olive oil",
	"2 small lemons",
	"1 teaspoon kosher salt",
	"4 cloves of chopped garlic",
];

const bakedSalomon = React.createElement(
	"section",
	{ id: "baked-salomon" },
	React.createElement("h1", null, "Baked Salomon"),
	React.createElement(
		"ul",
		{ className: "ingredients" },
		items.map((ingredient, index) =>
			React.createElement("li", { key: index }, ingredient)
		)
	),
	React.createElement(
		"section",
		{ className: "instructions" },
		React.createElement("h2", null, "Cooking Instructions"),
		React.createElement(
			"p",
			null,
			"Preheat the oven to 375 degrees. Lightly coat aluminum foil with oil. Place salmon on oil. Cover with rosemary, sliced lemons, chopped garlic."
		)
	)
);

ReactDOM.render(bakedSalomon, document.getElementById("root"));

//----------------------------------------------------
const secretIngredients = [
	"list item 1",
	"list item 2",
	"list item 3",
	"list item 4",
	"list item 5",
	"list item 6",
];

//function ingredientsLists(props) {
function ingredientsLists({ items }) {
	return React.createElement(
		"ul",
		{ className: "ingredients" },
		items.map((ingredient, index) =>
			React.createElement("li", { key: index }, ingredient)
		)
	);
}

//ReactDOM.render(ingredientsLists(), document.getElementById("root"));
ReactDOM.render(
	React.createElement(ingredientsLists, { items: secretIngredients }, null),
	document.getElementById("root")
);

// JSX with React
//===============

const data = [
	{
		name: "Baked Salmon",
		ingredients: [
			{ name: "Salmon", amount: 1, measurement: "l lb" },
			{ name: "Pine Nuts", amount: 1, measurement: "cup" },
			{ name: "Butter Lettuce", amount: 2, measurement: "cups" },
			{ name: "Yellow Squash", amount: 1, measurement: "med" },
			{ name: "Olive Oil", amount: 0.5, measurement: "cup" },
			{ name: "Garlic", amount: 3, measurement: "cloves" },
		],
		steps: [
			"Preheat the oven to 350 degrees.",
			"Spread the olive oil around a glass baking dish.",
			"Add the yellow squash and place in the oven for 30 mins.",
			"Add the salmon, garlic, and pine nuts to the dish.",
			"Bake for 15 minutes.",
			"Remove from oven. Add the lettuce and serve.",
		],
	},
	{
		name: "Fish Tacos",
		ingredients: [
			{ name: "Whitefish", amount: 1, measurement: "l lb" },
			{ name: "Cheese", amount: 1, measurement: "cup" },
			{ name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
			{ name: "Tomatoes", amount: 2, measurement: "large" },
			{ name: "Tortillas", amount: 3, measurement: "med" },
		],
		steps: [
			"Cook the fish on the grill until cooked through.",
			"Place the fish on the 3 tortillas.",
			"Top them with lettuce, tomatoes, and cheese.",
		],
	},
];

// A function component for an indiviual Recipe
function Recipe({ name, ingredients, steps }) {
	// name={recipe.name}
	// ingredients={recipe.ingredients}
	// steps={recipe.steps}
	return (
		<section id={name.toLowerCase().replace(/ /g, "-")}>
			<h1>{name}</h1>
			<ul className="ingredients">
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient.name}</li>
				))}
			</ul>
			<section className="instructions">
				<h2>Cooking Instructions</h2>
				{steps.map((step, i) => (
					<p key={i}>{step}</p>
				))}
			</section>
		</section>
	);
}

// A function component for the Menue of Recipes
function Menu({ title, recipes }) {
	return (
		<article>
			<header>
				<h1>{title}</h1>
			</header>
			<div className="recipes">
				{recipes.map((recipe, i) => (
					<Recipe
						key={i}
						name={recipe.name}
						ingredients={recipe.ingredients}
						steps={recipe.steps}
						//{...recipe}
					/>
				))}
			</div>
		</article>
	);
}

// A call to ReactDom.render to render our Menu into the current DOM
ReactDOM.render(
	<Menu recipes={data} title="Delicious Recipes" />,
	document.getElementById("root")
);
