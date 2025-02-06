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
    {
      "id": 2,
      "name": "Refrigerator",
      "description": "Domestic refrigerator",
      "unit": "watts",
      "options": [150, 200]
    },
    {
      "id": 3,
      "name": "Water Heater",
      "description": "Electric water heater",
      "unit": "watts",
      "options": [3000, 4500]
    },

  ]
}
``