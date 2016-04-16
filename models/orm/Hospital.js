module.exports = function(sequelize, DataTypes) {
    var Hospital = sequelize.define("Hospital", {
        hfsrb_id: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        tel_no_email_address:{
            type: DataTypes.STRING(255),
            defaultValue: ''
        },
        name_of_hospital: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        abc: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        iso: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        international_accreditation: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        hospital_id_number: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        name_of_owner: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        doh_lto_number: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        chd: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        complete_address: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        philhealth_acc: {
            type:  DataTypes.STRING(100),
            defaultValue: ''
        },
        iso_certifying_body: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        medical_director: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        mbfi_certification: {
            type:  DataTypes.STRING(255),
            defaultValue: ''
        },
        raw_details: DataTypes.TEXT
    },
    {
        underscored: true,
        tableName: 'hospital',
        classMethods: {
            associate: function(models) {
                // HealthCenter.hasOne(models.User)
            }
        },
        hooks: {
        }
    });

    return Hospital;
};