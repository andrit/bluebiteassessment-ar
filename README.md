communication is the key to development, so why not write notes on everything before production?__

CardList is a monad
selectList is the context bearing ul of Cards in li. ! changed this

# Component Tree 
**after codebase walkthrough:** 
1. controller 
2. renderer
    - 4 interface elements
    
App fetches and holds the global state, provides the state to the CardList to divy up between subscribers, the 4 interface elements: ButtonEl, ConditionEl, ImageEl and weatherEl.
the interface elements get displayed in response to interpreting the components,lists & variables provided by the data.

How to read in the data?
Pass them in as props from properties of a state object


