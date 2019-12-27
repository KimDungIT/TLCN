package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Invoices.InvoiceDto;
import vn.tlcn.trungtamgiasu.dto.mapper.InvoiceMapper;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Invoice;
import vn.tlcn.trungtamgiasu.repository.InvoiceRepository;

import java.util.Date;
import java.util.List;

@Service
public class InvoiceService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ClassRegisterService classRegisterService;

    @Autowired
    private ClassesService classesService;

    @Autowired
    private InvoiceMapper invoiceMapper;


    public Invoice saveInvoice(int idClassRegister){
        InvoiceDto invoiceDto = new InvoiceDto();

        ClassRegister classRegister = classRegisterService.getClassRegisterById(idClassRegister);

        // change status of class
        Classes classes = classRegister.getClasses();
        classes.setStatus("Đã giao");
        classes = classesService.saveClass(classes);

        classRegister.setStatus("Đã nhận lớp");
        classRegister.setClasses(classes);
        classRegister = classRegisterService.saveClassRegister(classRegister);

        invoiceDto.setClassRegister(classRegister);
        invoiceDto.setServiceFee(classRegister.getClasses().getServiceFee() * classRegister.getClasses().getSalary());
        invoiceDto.setTime(new Date());

        Invoice invoice = invoiceRepository.save(invoiceMapper.toInvoice(invoiceDto));

        // Update Status list class register fail
        int idClass = classes.getIdClass();
        List<ClassRegister> classRegistersFailList = classRegisterService.getListClassRegisterFail(idClass);
        for (ClassRegister classRegisterFail: classRegistersFailList) {
            classRegisterFail.setStatus("Không đạt");
            classRegisterService.saveClassRegister(classRegisterFail);
        }

        return invoice;
    }

    public List<Invoice> getAll(){
        return invoiceRepository.findAll();
    }

    public double[] calServiceFee(){
        double[] A = new double[12];
        List<Invoice> invoices = invoiceRepository.findAll();
        for (Invoice invoice: invoices) {
            int time = invoice.getTime().getMonth();
            switch (time){
                case 0:
                    A[0] += invoice.getServiceFee();
                    break;
                case 1:
                    A[1] += invoice.getServiceFee();
                    break;
                case 2:
                    A[2] += invoice.getServiceFee();
                    break;
                case 3:
                    A[3] += invoice.getServiceFee();
                    break;
                case 4:
                    A[4] += invoice.getServiceFee();
                    break;
                case 5:
                    A[5] += invoice.getServiceFee();
                    break;
                case 6:
                    A[6] += invoice.getServiceFee();
                    break;
                case 7:
                    A[7] += invoice.getServiceFee();
                    break;
                case 8:
                    A[8] += invoice.getServiceFee();
                    break;
                case 9:
                    A[9] += invoice.getServiceFee();
                    break;
                case 10:
                    A[10] += invoice.getServiceFee();
                    break;
                case 11:
                    A[11] += invoice.getServiceFee();
                    break;
            }
        }
        return A;
    }
}