package beans;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

import org.primefaces.event.DragDropEvent;
import org.primefaces.event.SelectEvent;

@SessionScoped
@ManagedBean

public class IndexBean {
	
	private List<String> imageList = new ArrayList<>();
	private List<String> selectedImages = new ArrayList<>();
	
	public IndexBean() {
	}

	@PostConstruct
	public  void init(){
		File dir = new File("F:\\eclipse-workspaces\\eclipsej2ee-O3\\Panels-01\\WebContent\\resources\\images");
		String[] ficheros = dir.list();
		if(ficheros!=null) {
			for(String elem : ficheros) {
				imageList.add(elem);
			}
		}
	}

	public List<String> getImageList() {
		return imageList;
	}
	
	public void setImageList(List<String> imageList) {
		this.imageList = imageList;
	}
	
	public void listDir() {
		//System.out.println(System.getProperty("user.dir"));
		File dir = new File("F:\\eclipse-workspaces\\eclipsej2ee-O3\\Panels-01\\WebContent\\resources\\images");
		String[] ficheros = dir.list();
		if(ficheros!=null) {
			for(String elem : ficheros) {
				System.out.println(elem);
			}
		}
		//System.out.println(dir.getAbsolutePath());
		//request.getContextPath()
	}

    public void onSelect(SelectEvent event) {
    	String selected = event.getObject().toString();
        FacesContext context = FacesContext.getCurrentInstance();
        context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Item Selected", selected));
        selectedImages.add(selected);
        imageList.remove(selected);
    }

    public List<String> getSelectedImages() {
    	return selectedImages;
    }
    
    public void setSelectedImages(List<String> selectedImages) {
    	this.selectedImages = selectedImages;
    }
////////////////////////////////////////////////////////////////////////////
    public static void main(String[] args) {
		System.out.println(System.getProperty("user.dir"));
		File dir = new File(".");
		String[] ficheros = dir.list();
		if(ficheros!=null) {
			for(String elem : ficheros) {
				System.out.println(elem);
			}
		}
	}

}

