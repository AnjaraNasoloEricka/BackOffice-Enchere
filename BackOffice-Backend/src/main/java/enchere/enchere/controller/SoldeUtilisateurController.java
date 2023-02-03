package enchere.enchere.controller;

import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import enchere.enchere.model.SoldeUtilisateur;
import enchere.enchere.retour.DataRetour;

@RestController
@CrossOrigin("*")
@RequestMapping("/soldeUtilisateur")
public class SoldeUtilisateurController {
    @PostMapping
    public ResponseEntity<?> insertSoldeUtilisateur(@RequestBody SoldeUtilisateur solde)throws SQLException {
        try {
           SoldeUtilisateur.insertSoldeUtilisateur(solde);
        }catch (Exception ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<DataRetour> listSoldeUtilisateur() throws Exception {
        new SoldeUtilisateur();
        return ResponseEntity.accepted().body(SoldeUtilisateur.listSoldeUtilisateur());
    }

    @PutMapping("/valide")
    public ResponseEntity<?> commitSolde()throws SQLException {
        try {
           SoldeUtilisateur.commit();;
        }catch (Exception ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/refuse")
    public ResponseEntity<?> rollbackSolde()throws SQLException {
        try {
           SoldeUtilisateur.rollback();;
        }catch (Exception ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
