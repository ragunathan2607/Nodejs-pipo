const express = require("express");
const router = express.Router();
const soap = require('soap');
require("dotenv").config();


router.post('/login', async (req, res) => {
    const { custid, password } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/a5ecb1d7b97f3ddc8c0dc4179b825439';
    const args = { CUSTID: custid, PASSWORD: password };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_CUSTLOGIN_RAGUService.HTTP_Port.SI_CUSTLOGIN_RAGU(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/customerprofile', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/46cef917169e3f50affab9d30afa8d21';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_CUSTOMER_PROFILE_RAService.HTTP_Port.SI_CUSTOMER_PROFILE_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/inquiry', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/1cff4cb40a26302eaf88203d4bb1a609';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INQUIRY_RAService.HTTP_Port.SI_INQUIRY_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/inquirydetail', async (req, res) => {
    const { inquirydoc } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/8f0a3a9a0f9c36f296ea329ed9297306';
    const args = { INQUIRY: inquirydoc };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INQUIRY_DETAIL_RAService.HTTP_Port.SI_INQUIRY_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/saleslist', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/a5a33a1fdb973cc0b46921f2a24af412';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_SALESORDERService.HTTP_Port.SI_SALESORDER(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/salesdetail', async (req, res) => {
    const { salesdoc } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/4e1885c72e8e32fba26298e889d625d8';
    const args = { SALESDOC_NO: salesdoc };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_SALESORDER_DETAIL_RAService.HTTP_Port.SI_SALESORDER_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/deliverylist', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/a104956ca84433bb89ee3ae573333711';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_DELIVERYLIST_RAService.HTTP_Port.SI_DELIVERYLIST_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/creditmemo', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/df4e403ad51934bf8fcea39fdb88c2f1';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_CREDIT_RAService.HTTP_Port.SI_CREDIT_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/debitmemo', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/868f6d388c1c37e38476d4a7e5b66693';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_DEBIT_RAService.HTTP_Port.SI_DEBIT_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/invoicelist', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/a10e29c3fc0b3885bde3b7440e9e8570';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INVOICE_LIST_RAService.HTTP_Port.SI_INVOICE_LIST_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
}); router.post('/invoicedetail', async (req, res) => {
    const { billno } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/7484c39212d13e55aeccca7d4eefe7c7';
    const args = { BILLDOC_NO: billno };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INVOICE_DETAIL_RAService.HTTP_Port.SI_INVOICE_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/payment', async (req, res) => {
    const { custid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/f182b772893a3094bf629e401c2535d3';
    const args = { CUSTID: custid };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_PAYMENTAGEING_RAService.HTTP_Port.SI_PAYMENTAGEING_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorlogin', async (req, res) => {
    const { vendorid, password } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/dbf936d6b7673cf3bd2f0d3661605238';
    const args = { VENDORID: vendorid, PASSWORD:password };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_VENDOR_LOGIN_RAService.HTTP_Port.SI_VENDOR_LOGIN_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorprofile', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/b47251781057341998ab2dca2018ee8c';
    const args = {VENDORID: vendorid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_VENDOR_PROFILE_RAService.HTTP_Port.SI_VENDOR_PROFILE_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/quotationlist', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/167916e83cba353ea97db39892799b84';
    const args = {VENDORID: 5};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_REQ_QUOTATION_RAService.HTTP_Port.SI_REQ_QUOTATION_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/goodsrecieptlist', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/41dceb40a5d93196bfad3915c403c493';
    const args = {VENDORID: vendorid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_GOODS_RECIEPT_LIST_RAService.HTTP_Port.SI_GOODS_RECIEPT_LIST_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/goodsrecieptdetail', async (req, res) => {
    const { docno } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/57e6f76c1c603c429e4e891b0df89cd6';
    const args = {MATERIAL_DOCUMENT: docno};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_RECIEPT_DETAIL_RAService.HTTP_Port.SI_RECIEPT_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorinvoicelist', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/35a97405b9b93c5bb1b5da9c94747f46';
    const args = {VENDORID: vendorid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INVOICE_LIST_RAService.HTTP_Port.SI_INVOICE_LIST_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorinvoicedetail', async (req, res) => {
    const { invdocno } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/6b40e2be94e53d3d896e25ff121abc6f';
    const args = {INVOICE_DOCUMENT: invdocno, VENDORITEM_SPLITDATA:'', TAXDATA:'', RETURN:'', ITEM_DATA:''};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_INVOICE_DETAIL_RAService.HTTP_Port.SI_INVOICE_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorpayments', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/a7b3b3ec0c4f32628dfbdca1a7d4a9d2';
    const args = {VENDORID: vendorid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_PAYMENT_AGEING_RAService.HTTP_Port.SI_PAYMENT_AGEING_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorpurchaselist', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/ef3c89734e6632668b2494e35991a6da';
    const args = {VENDORID: vendorid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_PURCHASE_LIST_RAService.HTTP_Port.SI_PURCHASE_LIST_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorpurchasedetail', async (req, res) => {
    const { purdocno } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/2d920accc6663d9189406d7ab31056a3';
    const args = {PURCHASE_DOCUMENT: purdocno};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_PURCHASE_ORD_DETAIL_RAService.HTTP_Port.SI_PURCHASE_ORD_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendorcredit', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/c7671e7b145c3aa89bc161867103f1cd';
    const args = { VENDOR_ID: vendorid, CREDIT_MEMO:''};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_CREDIT_RAService.HTTP_Port.SI_CREDIT_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/vendordebit', async (req, res) => {
    const { vendorid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/65bbacf99818364cb1ca9ab95d55569b';
    const args = { VENDOR_ID: vendorid, DEBIT_MEMO:''};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_DEBIT_RAService.HTTP_Port.SI_DEBIT_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/employeelogin', async (req, res) => {
    const { employeeid, password } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/935cae6362bc3391838a77fcb008316e';
    const args = { EMPLOYEEID: employeeid, PASSWORD:password };
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_EMPLOGIN_RAService.HTTP_Port.SI_EMPLOGIN_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/employeeleavedata', async (req, res) => {
    const { employeeid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/ba5dc4da7f8834f0956465a7a295f7fc';
    const args = { EMPLOYEE_NO: employeeid, LEAVE_DATA:''};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_LEAVE_RAService.HTTP_Port.SI_LEAVE_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/employeedetail', async (req, res) => {
    const { employeeid } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/089b7e70111d333fa66ac8fc3bff2eba';
    const args = { EMPLOYEE_ID: employeeid};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_EMP_DETAIL_RAService.HTTP_Port.SI_EMP_DETAIL_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
router.post('/employeepayslip', async (req, res) => {
    const { employeeid, month, year } = req.body;
    const url = 'http://dxktpipo.kaarcloud.com:50000/dir/wsdl?p=ic/12f2c5ea7bb337e0a582b65665edb37d';
    const args = { EMPLOYEEID: employeeid, MONTH: month, YEAR: year};
    const authentication = "Basic " + new Buffer.from('POUSER@1:Tech@2022').toString("base64");
    soap.createClient(url, { wsdl_headers: { Authorization: authentication } }, function (err, client) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(client);
            client.setSecurity(new soap.BasicAuthSecurity("POUSER@1", "Tech@2022"));
            client.SI_PAYSLIP_RAService.HTTP_Port.SI_PAYSLIP_RA(args, function (err, result, rawRequest) {
                if (err) {
                    res.json(err);
                }
                console.log(rawRequest);
                res.json(result);

            });
        }
    })
});
module.exports = router;
