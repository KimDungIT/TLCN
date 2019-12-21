package vn.tlcn.trungtamgiasu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.service.InvoiceService;

@RestController
@RequestMapping(value = "/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceService invoiceService;


    @PostMapping()
    public ApiResponse saveInvoice(@RequestParam(value = "idClassRegister")int idClassRegister){

        return new ApiResponse(
                HttpStatus.OK,
                "Save Invoice",
                invoiceService.saveInvoice(idClassRegister)
        );
    }
}
