/**
 * THis is a mongoose plugin for our database to generate pagination based on document count
 * @param {*} schema 
 * @param {*} options 
 */
export const PaginatePlugin = (schema, options) => {
    options = options || {}
    schema.query.paginate = async function (params) {
        const pagination = {
            limit: options.limit || 10,
            page: 1,
            count: 0
        }
        pagination.limit = parseInt(params.limit) || pagination.limit
        const page = parseInt(params.page)
        pagination.page = page > 0 ? page : pagination.page
        const offset = (pagination.page - 1) * pagination.limit
        
        
        const [data, count] = await Promise.all([
            this.limit(pagination.limit).skip(offset),
            this.model.countDocuments(this.getQuery())
        ]);
        // Genareate the total number of pages expected based on document count
        const lastPage = pagination.limit > 0 ? Math.ceil(count / pagination.limit) || 1 : null;

        // Genareate the start document number from the skip and limit on the page
        const from = page > lastPage && data.length == 0 ? null : offset + 1;

        // Genareate the end document number from the skip and limit on the page
        const to = page > lastPage && data.length == 0 ? null : offset + data.length;

        pagination.count = count;
        pagination.lastPage = lastPage;
        pagination.from = from;
        pagination.to = to;
        pagination.prevPage = pagination.page < from && from !== null;
        pagination.nextPage = pagination.count >= to && pagination.count !== to && to !== null;
        return { data, pagination }
    }
}