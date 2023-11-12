import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AppComponent } from "./app.component"



describe(`AppComponent`, () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent]
        })
    })

    it(`Debería levantar la app, y el titulo debería ser igual a "PF3FernandezJavier"`, () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
        expect(app.title).toEqual("PF3FernandezJavier")
    })
})