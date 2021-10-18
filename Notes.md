__ Im trying this out. Keeping the notes in the code.
its helpful bc my worklfow and skillbased choices mean alot in an interview.
Moreover, communication is the key to development, so why not write notes on everything before production? __

# Initial Thoughts/Notes

Use React Router to create the 4 views?
 4 views:?
nav to control the 
 select that says with the following actions showCity(name), seeTemperature(), advertsToggle(), 
card component
card types:
City, TemperatureNow, Advert, BooleanIsVisible({show, hide})

Context: selectList(props) renderChildren

monad is CardStack/Map
selectList is the context bearing ul of Cards in li.

FlowScreen controls what is shown by what is chosen in the Nav/FlowDirections

FlowScreen > (CardStack >selectList>Card*n>{n}TypeLayout))+FlowDirections


# After First Walk through of codebase and instructions Notes

# Initial Component Tree


# Final Direction: controller, renderer, 4 web components
    app is the original cardstack: it is the fetch and the context & holds the app data object in state (local storage, persistent, cache)
    card list is what Card was, it is the renderer director
    4 UI components : these pass jsx templates to the conditional renderer
    how to read in the data?
    start by reading in the data to a Map/object...3 objects, i thats optional

# Better DX on assesment:
	•	a summary section of work to be completed before API discussion…otherwsie initial thought is that I have to create the API
	•	Whats up with the views?
