// before
orders.filter((o) => 'high' === o.priority || 'rush' === o.priority)

// after
orders.filter((o) => o.priority.higherThan(new Priority('normal')))
