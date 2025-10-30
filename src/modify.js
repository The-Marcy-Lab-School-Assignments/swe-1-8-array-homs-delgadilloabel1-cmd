const filterVipUsers = (users, vipUserIdsSet) => {
  return users.filter(user => vipUserIdsSet.has(user.id))
};

const multiplicativeAverage = (nums) => {
  const sum = nums.reduce((currentSum, currentNum) => {
    return currentSum * currentNum
  }, 1)
  return sum / nums.length
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};
