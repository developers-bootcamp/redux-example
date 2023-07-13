


export const test = 1

collection.aggregate([
    {
        $match: {
            direction: "PORTRAIT"
        }
    },
    {
        $group: {
            _id: "$userId",
            myCounter: {
                $count: {}
            }
        }
    },
    {
        $project: {
            userId: "$_id",
            sumOfBlaBla: "$myCounter",
            _id: 0
        }
    },
    {
        $lookup: {
            from: "userJobs",
            localField: "userId",
            foreignField: "_id",
            as: "users"
        }
    },
    {
        $unwind: {
            path: "users",
            includeArrayIndex: 'string',
            preserveNullAndEmptyArrays: true
        }
    }
])