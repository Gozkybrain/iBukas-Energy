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

- ### How Long would you want your System to run on 3400W?

Lets assume we want it to run for 5 hours, the required energy required would be:
`3400W x 5Hours = 17,000 WH approx 17kWh`

- ### What would be the battery capacity?

We would be using a 48V System, therefore we have: `(17,000 WH / 48V) = 354 AH`. This is the Battery Capacity Needed; we would achieve this with a `48V x 200AH = 9.6kWh`. We need 2 sets of this battery (ie 19.2kWh) to get the required 17kWh total required energy to run for 5 hours.

- ### How Many Panels would be needed?

We would be using a 400 Watt monochrome panel, and using the 5 hour peak sunlight, and the 17KWH required energy.

`Solar Panel Required = 17 KWH / (400 x 5) = 8.5 Approx 9 Panels`

So we need a 9 x 400W Solar Panels (Total: 3,600W or 3.6kW), minimum 4KW of inverter, and 2 batteries on 48V 200AH.

## Summary of How Long This Will Run Your 3,400W Load
- Daytime (Solar Only): Panels produce 3,600W, so you can run most appliances directly from solar during the day.
- Nighttime (Battery Only): Batteries store 19.2kWh, so they can run 3,400W for ~5-6 hours before draining.



