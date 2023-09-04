export const extractAllServices = (data) => {
    let output = []
    data.map((entry) => {
        entry.services.map((service) => {
            output.includes(service) ? null : output.push(service)
        })
    })

    return output
}

export const filterDataByOptions = (data, options) => {
    let output = []
    data.map((entry) => {
        entry.services.map((service) => {
            if(options.includes(service)) {
                output.includes(entry) ? null : output.push(entry)
            }
        })
    })

    return output
}

export const transformServicesForIconName = (services) => {
    let output = ''
    services.map((service) => {
        service === 'Sleeping' || service === "Eating" || service === 'Drinking' || service === 'Visiting' ? output += service : null
    })

    return output
}