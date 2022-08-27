let client = {
    name: "Isra Choudhury",
    job: "Sutudent",
    address: {
        hometown: "Khilgau",
        zip: 23534,
        area: "sadar",
        prestn_address: {
            city: "Sylhet",
            ps: "Shahporan",
            zip: 23546,
        },
    },
};

let getData = client.address.prestn_address.pss;
console.log(getData);