package enchere.enchere.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import enchere.enchere.model.Duree;

@RestController
@CrossOrigin("*")
@RequestMapping("/duree")
public class DureeController {
    @PutMapping
    public ResponseEntity<?> updateDuree(@RequestBody Duree d) throws Exception {
        try {
            Duree.modifDuree(d);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
