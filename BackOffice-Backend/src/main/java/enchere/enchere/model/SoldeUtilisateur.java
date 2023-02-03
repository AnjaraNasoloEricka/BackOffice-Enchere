package enchere.enchere.model;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import enchere.enchere.connexion.Connexion;
import enchere.enchere.retour.DataRetour;

public class SoldeUtilisateur implements Serializable{
    private int id;
    private int idUtilisateur;
    private double solde;
    private Date daterecharge;

    public static PreparedStatement stat = null;
    public static Connection co = Connexion.getConnection();
    public static Statement statement = null;
    public static ResultSet result = null;
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(int idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public double getSolde() {
        return solde;
    }

    public void setSolde(double solde) {
        this.solde = solde;
    }

    public Date getDaterecharge() {
        return daterecharge;
    }

    public void setDaterecharge(Date daterecharge) {
        this.daterecharge = daterecharge;
    }

    public SoldeUtilisateur(int id, int idUtilisateur, double solde, Date daterecharge) {
        this.id = id;
        this.idUtilisateur = idUtilisateur;
        this.solde = solde;
        this.daterecharge = daterecharge;
    }

    public SoldeUtilisateur() {
    }

    public static void commit() throws Exception{

        try{
            String requete = "commit";
            stat = co.prepareStatement(requete);
            stat.executeUpdate();
        }catch(SQLException e){}
        finally{
            if(result != null){
                result.close();
            }
            if(stat != null){
                stat.close();
            }
            co.close();
        }
    }

    public static void rollback() throws Exception{

        try{
            String requete = "rollback";
            stat = co.prepareStatement(requete);
            stat.executeUpdate();
        }catch(SQLException e){}
        finally{
            if(result != null){
                result.close();
            }
            if(stat != null){
                stat.close();
            }
            co.close();
        }
    }

    public static void insertSoldeUtilisateur(SoldeUtilisateur solde) throws Exception{

        try{
            String requete = "BEGIN; INSERT INTO SoldeUtilisateur VALUES(default,?,?,default)";
            stat = co.prepareStatement(requete);
            stat.setInt(1,solde.getIdUtilisateur());
            stat.setDouble(2,solde.getSolde());
            stat.executeUpdate();
        }catch(SQLException e){}
    }

    public static DataRetour<ArrayList<SoldeUtilisateur>> listSoldeUtilisateur() throws Exception{
        ArrayList<SoldeUtilisateur> listC = new ArrayList<SoldeUtilisateur>();

        try{
            statement = co.createStatement();
            String requete = "select*from soldeutilisateur order by id desc limit 1";
            result = statement.executeQuery(requete);
            while (result.next()) {
                SoldeUtilisateur solde = new SoldeUtilisateur();
                solde.setId(result.getInt("id"));
                solde.setIdUtilisateur(result.getInt("idUtilisateur"));
                solde.setSolde(result.getDouble("solde"));
                System.out.println(solde.getSolde());
                solde.setDaterecharge(result.getDate("daterecharge"));
                listC.add(solde);
            }
        }catch(SQLException e){}
        return new DataRetour<ArrayList<SoldeUtilisateur>>(listC);
    }
}
