export const extractAllServices = (data) => {
    let output = []
    data.map((entry) => {
        entry.services.map((service) => {
            output.includes(service) ? null : output.push(service)
        })
    })

    return output
}