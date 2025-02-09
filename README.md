# iBukas Energy
This project is a robust solar inverter management calculator system which will focus primarily on calculating load for a house hold and recommending the right type of system. The app will consist of various algorithm to help even the most basic of users get the best of experience.

## Predefined Appliances and Wattage
A json file containing a library of home appliances and a range of their wattage is provided; this will allow users to select all their appliances from a wide range of products, and also select the wattage for the product from our list or enter a wattage manually if they know it.

```
{
  "appliances": [
    {
      "id": 1,
      "name": "Bulb",
      "description": "A standard LED light bulb",
      "unit": "watts",
      "options": [10, 15]
    },

  ]
}
```

## Calculations
All the input by the user will be summed up to get the total wattage required by the home. Even tho all gadgets will not be turned on at the same time, it is best to input all gadgets that would be used on the system so that there would be enough charge for them, and we can be sure that the selected inverter can carry it comfortably. Let the total need of the house be assumed to be a total of `3400W` ie `3.4KW`, therefore the minimum inverter for this setup is a `4KVA` inverter.

`If Inverter is Less than 2.5KVA, then recommend 12V system; if more than 2.5KVA but less than 5KVA, then recommend 24V system. Anything higher than that should be a 48V System.`

The average peak sunlight will also be assumed to be `5 hours` per day.

### others
