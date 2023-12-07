export const thresholdArray =[
    {
        label: "Minimum temperature",
        name : ["thresholdParameters", "temperatures", "min"],
        rules: [
            {
              required: true,
              type: "number",
              min: 22,
              max: 33,
            },
          ],

    },
    {
        label: "Maximum temperature",
        name : ["thresholdParameters", "temperatures", "max"],
        rules: [
            {
              required: true,
              type: "number",
              min: 22,
              max: 33,
            },
          ],


    },
    {
        label: "Humidities max",
        name : ["thresholdParameters", "humidities", "max"],
        rules: [
            {
                required: true,
                type: "number",
                min: 50,
                max: 80,
              },
          ],


    },
    {
        label: "Light",
        name : ["thresholdParameters", "light"],
        rules: [
            {
                required: true,
                type: "number",
              },
          ],


    },
    {
        label: "Dissolved Oxygen",
        name : ["thresholdParameters", "dissolvedOxygen"],
        rules: [
            {
                required: true,
                type: "number",
              },
          ],


    },
];