const DataModel = require("../model/Data.model");

module.exports.getAlldataController = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(500).json({ success: false, messages: error?.message });
    }
}