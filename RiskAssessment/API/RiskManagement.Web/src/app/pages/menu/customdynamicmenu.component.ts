import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
import { Menu } from '../../theme/components/menu/menu.model';
import { MenuService } from '../../theme/components/menu/menu.service';
import { MenuViewModel } from './customdynamicmenu.model';
import { CustomDynamicMenuService } from './customdynamicmenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';


@Component({
    selector: 'app-custom-dynamic-menu',
    templateUrl: './customdynamicmenu.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService, CustomDynamicMenuService]
})
export class CustomDynamicMenuComponent implements OnInit {
    public form: FormGroup;
    public targets = ['_blank', '_self'];
    public menuId: number = 0;
    public icons = [
        { name: 'address-card-o', unicode: '&#xf2bc' },
        { name: 'bars', unicode: '&#xf0c9' },
        { name: 'bell-o', unicode: '&#xf0a2' },
        { name: 'calendar', unicode: '&#xf073' },
        { name: 'circle', unicode: '&#xf111' },
        { name: 'circle-o', unicode: '&#xf10c' },
        { name: 'cog', unicode: '&#xf013' },
        { name: 'comment', unicode: '&#xf075' },
        { name: 'comment-o', unicode: '&#xf0e5' },
        { name: 'credit-card', unicode: '&#xf09d' },
        { name: 'desktop', unicode: '&#xf108' },
        { name: 'exclamation-triangle', unicode: '&#xf071' },
        { name: 'folder', unicode: '&#xf07b' },
        { name: 'folder-o', unicode: '&#xf114' },
        { name: 'heart', unicode: '&#xf004' },
        { name: 'search', unicode: '&#xf002' },
        { name: 'users', unicode: '&#xf0c0' }
    ]

    public menuItems: MenuViewModel[] = [];
    public settings: Settings;
    constructor(private _CustomDynamicMenuService: CustomDynamicMenuService, public fb: FormBuilder,
        public toastrService: ToastrService,
        public appSettings: AppSettings,
        private menuService: MenuService
        , private router: Router, private route: ActivatedRoute) {
        this.settings = this.appSettings.settings;
        //if (this.settings.theme.menu == 'vertical') {
        //    this.menuItems = this.menuService.getVerticalMenuItems();
        //}
        //if (this.settings.theme.menu == 'horizontal') {
        //    this.menuItems = this.menuService.getHorizontalMenuItems();
        //}
    }

    ngOnInit() {
        this.addHtmlToForm();
        this.getAllMenu();

        this.route.params.subscribe(params => {
            this.menuId = params['id'] as number; //log the value of id
        });
        this.editMenu();
    }
    editMenu() {
        if (this.menuId > 0) {
            this._CustomDynamicMenuService.getSingle(this.menuId).subscribe((res: MenuViewModel) => {
                this.addHtmlToForm(res);
                this.menuItems = this.menuItems.filter(x => x.MenuId != res.MenuId);
            });
        }
    }
    addHtmlToForm(model: MenuViewModel = new MenuViewModel()) {
        this.form = this.fb.group({
            MenuId: [model.MenuId],
            Title: [model.Title, Validators.compose([Validators.required, Validators.minLength(3)])],
            RouterLink: [model.RouterLink],
            Href: [model.Href],
            Icon: [model.Icon],
            Target: [model.Target],
            HasSubMenu: [model.HasSubMenu],
            ParentMenuId: [model.ParentMenuId],
            SortOrder: [model.SortOrder, Validators.required],
            CreatedDate: [model.CreatedDate],
            CreatedBy: [model.CreatedBy],
            IsActive: [model.IsActive],
            IsDeleted: [model.IsDeleted],
        });
    }

    saveData(model: MenuViewModel) {
        this._CustomDynamicMenuService.appUpdateMenu(model).subscribe((res: number) => {
            this.router.navigate(['/pages/menu/list']);
        });
    }

    getAllMenu() {
        this._CustomDynamicMenuService.getAllMenu().subscribe((res: MenuViewModel[]) => {
            this.menuItems = res;
        });
    }

}
