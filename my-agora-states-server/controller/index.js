const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if (id !== undefined) {
      const discussion = discussionsData.find((discussion) => {
        return discussion.id === Number(id);
      })
      if (discussion !== undefined) {
        return res.status(200).send(discussion);
      } else {
        return res.status(404).send("데이터가 존재하지 않습니다")
      }
    }
  }

};

module.exports = {
  discussionsController,
};
