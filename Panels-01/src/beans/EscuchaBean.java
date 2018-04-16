package beans;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@SessionScoped
@ManagedBean
public class EscuchaBean {
	
	private List<String> satzList = new ArrayList<>();
	private String satz;
	
	public EscuchaBean() {
	}

	@PostConstruct
	public  void init(){
	}

	public List<String> getSatzList() {
		return satzList;
	}
	
	public void setSatzList(List<String> satzList) {
		this.satzList = satzList;
	}
	
	public String getSatz() {
		return satz;
	}
	
	public void setSatz(String satz) {
		this.satz = satz;
	}

	public void addSatz() {
		satzList.add(this.satz);
		System.out.println("...."+this.satz+" : "+satzList.size());
	}
}

