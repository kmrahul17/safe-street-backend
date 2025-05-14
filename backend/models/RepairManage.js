const mongoose = require('mongoose');

const RepairManageSchema = new mongoose.Schema({
    repairId: {
        type: String,
        required: true,
        unique: true
    },
    worker: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    assignedDate: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    notes:{
        type: String
    }
});

module.exports = mongoose.model('RepairManage', RepairManageSchema);