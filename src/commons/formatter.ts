
const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle : 'short'})

const formatter = {
    formatDate(date: Date|number) {
        return dateFormatter.format(date)
    }
}

export default formatter
