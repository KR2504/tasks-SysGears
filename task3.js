const data = {
    "start": { "What is your marital status?": ["Single", "Married"] },
    "Single": { "Are you planning on getting married next year?": ["Yes", "No"] },
    "Married": { "How long have you been married?": ["Less than a year", "More than a year"] },
    "More than a year": { "Have you celebrated your one year anniversary?": ["Yes", "No"] },
}

const dataKeys = Object.keys(data)

const answerList = ["Single", "Yes"];

for (const answer of answerList) {
    if (dataKeys.includes(answer)) {
        console.log(data[answer])
    }
}